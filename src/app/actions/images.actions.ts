import { Action } from '@ngrx/store';
import { Images } from '../models/images.model';


export const UPDATE_IMAGES = '[IMAGES]Update';
export const GET_IMAGES = '[IMAGES]Get';
export const SHUFFLE_IMAGES = '[IMAGES]Shuffle';
export const GET_SCORE = '[SCORE]Get';
export const UPDATE_SCORE = '[SCORE]Update';
export const GET_TOPSCORE = '[TOPSCORE]Get';
export const UPDATE_TOPSCORE = '[SCORE]Update';

export class UpdateImages implements Action {
    readonly type = UPDATE_IMAGES;

    constructor(public payload: number) {
        
    }
}

export class GetImages implements Action {
    readonly type = GET_IMAGES;

    constructor() {

    }
}

export class ShuffleImages implements Action {
    readonly type = SHUFFLE_IMAGES;

    constructor() {

    }
}

export class GetScore implements Action {
    readonly  type = GET_SCORE;

    constructor() {}
}


export class UpdateScore implements Action {
    readonly  type = UPDATE_SCORE;

    constructor() {}
}


export class GetTopScore implements Action {
    readonly  type = GET_TOPSCORE;

    constructor() {}
}


export class UpdateTopScore implements Action {
    readonly  type = UPDATE_TOPSCORE;

    constructor() {}
}

export type Actions = UpdateImages | GetImages | ShuffleImages | GetScore | UpdateScore | GetTopScore | UpdateTopScore;