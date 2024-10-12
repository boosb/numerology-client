import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AuthService } from "./auth.service";
import { IPaths } from "../interfaces/paths.interface";

@Injectable({
    providedIn: 'root'
})
export class ImgService {
    public paths: IPaths = {
        DEFAULT_AVATAR: 'assets/images/default-ava.png',
        DEFAULT_AVATAR_MAN: 'assets/images/default-ava-man.png',
        DEFAULT_AVATAR_WOMAN: 'assets/images/default-ava-woman.png',

        LOGO: 'assets/images/logo.svg',
        COINS: 'assets/images/coins.svg',
        EXIT: 'assets/images/exit.svg',
        WARNING_ONE: 'assets/images/warning-one.svg',
        WARNING_TWO: 'assets/images/warning-two.svg',
        EDIT_ICON: 'assets/images/edit-icon.svg',
        HANDS: 'assets/images/hands.svg',
        HANDS_TWO: 'assets/images/hands-two.svg',
        LOTUS_POSE: 'assets/images/lotus-pose.svg',
        LOTUS_POSE_TWO: 'assets/images/lotus-pose-two.svg',

        BACK_ARROW: 'assets/images/back-arrow.svg',
        STAR_LI: 'assets/images/star-li.svg',

        EYE: 'assets/images/eye.svg',
        EYE_OFF: 'assets/images/eye-off.svg',

        NOT_FOUND_PAGE: 'assets/images/not-found-img.svg',
    }

    private genders: any = {
        MAN: 'Мужской',
        WOMAN: 'Женский'
    }

    constructor(
        private domSanitizer: DomSanitizer,
        private authService: AuthService
    ) {}

    getPath(key: string) {
        return this.paths[key];
    }

    getDefaultUserAvatar() {
        const { currentUser } = this.authService;
        const { MAN, WOMAN } = this.genders;
        
        switch(currentUser?.gender) {
            case MAN:
                return this.getImg(this.paths['DEFAULT_AVATAR_MAN']);
            case WOMAN:
                return this.getImg(this.paths['DEFAULT_AVATAR_WOMAN']);
            default:
                return this.getImg(this.paths['DEFAULT_AVATAR']);
        }
    }

    getImg(imgPath: string | undefined | null) {
        return imgPath ? this.domSanitizer.bypassSecurityTrustUrl(imgPath) : null;
    }
}