import { aboutPath, contactPath } from '../../constants/routeNames'

class HeaderLink {
    constructor(path, displayText) {
        this.path = path;
        this.displayText = displayText;
    }
}

export const headerLinks = [
    new HeaderLink(aboutPath, "About"),
    new HeaderLink(contactPath, "Contact")
];

