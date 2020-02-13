export class Tile {
    selected = false;
    pos = [];
    board;
    label;
    percentage;

    constructor(board, pos, label, percentage) {
        this.label = label;
        this.board = board;
        this.pos = pos;
        this.selected = false;
        this.percentage = percentage;
    }

    isSelected() {
        return this.selected;
    }

    resetSelected() {
        this.selected = false;
    }

    toggleSelected() {
        this.selected = !this.selected;

    }
}
