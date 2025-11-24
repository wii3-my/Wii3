export interface Influencer {
  id: number;
  name: string;
  handle: string;
  niche: string;
  followers: string;
  engagement: string;
  image: string;
  verified: boolean;
}

export interface CampaignData {
  month: string;
  engagement: number;
  reach: number;
  conversions: number;
}

export interface AiStrategyResult {
  strategy: string;
  hashtags: string[];
  contentIdeas: string[];
}
