class Player {
  nickname_ = null;
  role_ = null;

  constructor(nickname, role) {
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

module.exports = Player;
