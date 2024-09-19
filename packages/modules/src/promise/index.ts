import { isCallable } from '@nant-es/internal';

export class NPromise {
	state: 'pending' | 'fulfilled' | 'rejected';
	fulfillReactions: NPromise[];
	rejectReactions: NPromise[];
	isHandled: boolean;
	static PENDING = 'pending' as const;
	static FULFILLED = 'fulfilled' as const;
	static REJECTED = 'rejected' as const;

	constructor(executor) {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (new.target === undefined)
			throw new TypeError(
				`NPromise constructor cannot be invoked without 'new'`,
			);
		// 2. If IsCallable(executor) is false, throw a TypeError exception.
		if (isCallable(executor))
			throw new TypeError(`NPromise resolver ${executor} is not a function`);

		// 3.
		this.state = NPromise.PENDING;
		this.fulfillReactions = [];
		this.rejectReactions = [];
		this.isHandled = false;
	}
}
