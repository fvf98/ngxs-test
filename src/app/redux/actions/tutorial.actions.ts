import { Tutorial } from '../../models/tutorial.model';

export class AddTutorial {
    static readonly type = '[TUTORIAL] Add';

    constructor(public payload: Tutorial) { }
}

export class RemoveTutorial {
    static readonly type = '[TUTORIAL] Remove';

    constructor(public payload: string) { }
}

// tutorial https://coursetro.com/posts/code/152/Angular-NGXS-Tutorial---An-Alternative-to-Ngrx-for-State-Management
