export interface ICampaignsUserModel {
  id: number;
  title: string;
  description: string;
  linkCampaign: string;
  image: string;
  financialGoal: number;
  country: string;
  timeStart: Date;
  timeEnd: Date;
  categories: string;
  moneyPledged: number;
}
