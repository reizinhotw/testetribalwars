function churchRadius(level) {
    let radius;
    switch (level) {
        case 1:
            radius = 4;
            break;
        case 2:
            radius = 6;
            break;
        case 3:
            radius = 8;
            break;
        default:
            radius = 0;
    }
    return radius;
}
