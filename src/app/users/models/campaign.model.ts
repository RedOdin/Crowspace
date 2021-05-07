export interface ICampaignModel {
  id: number;
  title: string;
  description: string;
  userId: number;
  linkCampaign: string;
  image: string;
  video: string;
  financialGoal: number;
  country: string;
  timeStart: Date;
  timeEnd: Date;
  checkingAccount: string;
  categories: string;
  moneyPledged: number;
}
