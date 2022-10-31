

class Drawing {

    constructor(svgId) {
        this.draw = SVG(svgId)
    }

    newTrain(point) {
        return this.draw.circle(20).center(point.x, point.y)
    }
    
    moveTrainAlongPath(path, train) {
    
        var startPoint = path.pointAt(0)
        var endPoint = path.pointAt(path.length())
    
        train.animate().center(endPoint.x, endPoint.y)
    
    }

}


window.onload = () => {   

    var drawing = new Drawing("#svg1257")
    var path1 = SVG("#path2048")

    var train1 = drawing.newTrain(path1.pointAt(0))
    drawing.moveTrainAlongPath(path1, train1)

}