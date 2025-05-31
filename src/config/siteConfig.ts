
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
  defaultDownloadUrl: 'https://google-veo3.com/GoogleVeo3.zip',
  defaultArchivePassword: 'Soft2025',
  inviteCodes: {
    'Veo3FreeNow!': {
      hasAccess: true,
      downloadUrl: 'https://google-veo3.com/GoogleVeo3.zip',
      archivePassword: 'Soft2025',
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
