import { Feature } from './feature'

export class Role {
	Key: string;
	Title: string;

	Features: Feature[];

	toPlugin(): any {
		var result: string[]
		this.Features.forEach((feature: Feature) => {
			result.push(feature.toPlugin())
		})
		return result
	}
}