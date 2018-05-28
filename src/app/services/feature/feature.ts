export class Feature {
	Key: string;
	URL: string;
	Title: string;

	toPlugin(): string {
		return this.Key
	}
}