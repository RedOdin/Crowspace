export interface ICampaignRewardModel {
  id: number;
  title: string;
  description: string;
  user_id: number;
  link_campaign: string;
  image: string;
  video: string;
  financial_goal: number;
  country: string;
  time_start: Date;
  time_end: Date;
  checking_account: string;
  categories: string;
  money_pledged: number;
  login: string;
}
