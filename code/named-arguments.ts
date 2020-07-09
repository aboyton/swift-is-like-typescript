// JavaScript uses object literals to simulate named parameters
function area({ width, height }: { width: number, height: number }): number {
    return width * height
}
area({ width: 2, height: 3 })

