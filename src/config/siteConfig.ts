
export interface InviteCodeConfig {
  downloadUrl?: string;
  archivePassword?: string;
  hasAccess?: boolean;
}

export interface SiteConfig {
  defaultDownloadUrl: string;
  defaultArchivePassword: string;
  inviteCodes: Record<string, InviteCodeConfig>;
}

export const siteConfig: SiteConfig = {
  defaultDownloadUrl: 'https://pixeldrain.com/api/file/qYNYLRhk?download',
  defaultArchivePassword: 'Soft2025',
  inviteCodes: {
    'Veo3FreeNow!': {
      hasAccess: true,
      // Использует значения по умолчанию, если не указаны
    },
    'PremiumAccess2025': {
      hasAccess: true,
      downloadUrl: 'https://pixeldrain.com/api/file/premium123?download',
      archivePassword: 'Premium2025',
    },
    'BetaTest': {
      hasAccess: true,
      downloadUrl: 'https://pixeldrain.com/api/file/beta456?download',
      archivePassword: 'Beta2025',
    },
  },
};

export const getConfigForInviteCode = (inviteCode: string) => {
  const config = siteConfig.inviteCodes[inviteCode];
  if (!config) return null;
  
  return {
    hasAccess: config.hasAccess || false,
    downloadUrl: config.downloadUrl || siteConfig.defaultDownloadUrl,
    archivePassword: config.archivePassword || siteConfig.defaultArchivePassword,
  };
};

export const isValidInviteCode = (inviteCode: string): boolean => {
  return inviteCode.trim() in siteConfig.inviteCodes;
};
