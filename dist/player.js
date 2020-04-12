export class Player {
    constructor(nickname, role) {
        this.nickname_ = null;
        this.role_ = null;
        this.nickname = nickname;
        this.role = role;
    }
    set nickname(nickname) {
        this.nickname_ = nickname;
    }
    get nickname() {
        return this.nickname_;
    }
    set role(role) {
        this.role_ = role;
    }
    get role() {
        return this.role_;
    }
}
//# sourceMappingURL=player.js.map