import { CollectionProvider } from "../Services/CollectionProvider";
import { ICollection } from "../Services/ICollection";

export type SingleComingFeedback = {
    userId: string;
    reportId: string;
};

export async function getComingFeedbackCollection(): Promise<ICollection<SingleComingFeedback>> {
    return await CollectionProvider.get<SingleComingFeedback>('ComingFeedback');
}