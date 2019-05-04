
import * as ImagesActions from '../actions/images.actions';
import { Action } from '@ngrx/store';
import { Images } from '../models/images.model';
import { AppState } from '../store/app.state';
import { stat } from 'fs';


const initialState: AppState = {
    imgData: [
        {
            imgPath: "assets/images/baraka.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/cassie_cage.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/cetrion.png",
            clicked: false
        },
        {
            imgPath: "assets/images/dvorah.png",
            clicked: false
        },
        {
            imgPath: "assets/images/erron_black.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/geras.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/jacqi_briggs.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/jade.png",
            clicked: false
        },
        {
            imgPath: "assets/images/jax.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/johnny_cage.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/kabal.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/kano.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/kitana.png",
            clicked: false
        },
        {
            imgPath: "assets/images/kollector.png",
            clicked: false
        },
        {
            imgPath: "assets/images/kotal_khan.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/kung_lao.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/liu_kang.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/noob_saibot.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/raiden.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/scorpion.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/shang_tsung.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/shao_khan.jpeg",
            clicked: false
        },
        {
            imgPath: "assets/images/skarlet.png",
            clicked: false
        },
        {
            imgPath: "assets/images/sonya_blade.jpg",
            clicked: false
        },
        {
            imgPath: "assets/images/subzero.jpg",
            clicked: false
        },
    
    ],
    score: 0,
    topScore: 0
};


export function reducer(state: AppState = initialState, action: ImagesActions.Actions) {
    switch (action.type) {
        case ImagesActions.UPDATE_IMAGES:
            return {...state, score: state.score+1, topScore: state.score, imgData: state.imgData.map(fighter => {
                    if (fighter === state.imgData[action.payload]) {
                        fighter = {...fighter , clicked: true}
                    }
                    return fighter
                })
            }
        case ImagesActions.GET_IMAGES:
            return {...state};
        case ImagesActions.SHUFFLE_IMAGES:
            return {...state, imgData: state.imgData.map((image) => {
                let j,temp;
                for (let i = state.imgData.length - 1; i > 0; i-- ) {
                    j = Math.floor(Math.random() * (i + 1));
                    temp = state.imgData[i];
                    state.imgData[i] = state.imgData[j];
                    state.imgData[j] = temp
                }
                return  state.imgData;
        
            })}
        case ImagesActions.GET_SCORE:
            return {...state};
        case ImagesActions.UPDATE_SCORE:
            return {...state, score: state.score++};
        case ImagesActions.GET_TOPSCORE:
            return {...state};
        case ImagesActions.UPDATE_TOPSCORE:
            return {...state, topScore: state.topScore++};
        default:
            return state;
    }
};