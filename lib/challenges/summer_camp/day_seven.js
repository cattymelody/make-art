var palette = require('../language/modules/palette.json'),
    generate = require('./util/generate');

module.exports = {
    id          : 'day_seven',
    title       : 'TBD',
    description : 'TBD',
    startAt     : 0,
    summerCamp  : true,
    steps       : generate.fromSequence([
        [
            'Select a spooky color for the background - **type** `background darkpurple`',
            'background darkpurple',
            [
                [ 'background', { color: palette.darkpurple } ]
            ]
        ],
        [
            'Set the `stroke` to `0`, to avoid drawing lines',
            'stroke 0',
            [
                [ 'stroke-width', { 'width': 0 } ]
            ]
        ],
        [
            'Set the `color` to `white` for the ghost',
            'color white',
            [
                [ 'color', { color: palette.white } ]
            ]
        ],
        [
            'Now draw an ellipse for the ghost\'s body - **type** `ellipse 120, 140`',
            'ellipse 120, 140',
            [
                [ 'ellipse', { rx: 120, ry: 140 } ]
            ]
        ],
        [
            'Set the `color` to `black` for the eyes',
            'color black',
            [
                [ 'color', { color: palette.black } ]
            ]
        ],
        [
            'Move the cursor to draw the first eye - **type** `move -40, -50`',
            'move -40, 50',
            [
                [ 'move', { dx: -40, dy: -50 } ]
            ]
        ],
        [
            'Draw the eye with an ellipse - **type** `ellipse 20, 30`',
            'ellipse 20, 30',
            [
                [ 'ellipse', { rx: 20, ry: 30 } ]
            ]
        ],
        [
            'Set the `color` to `lightgray`',
            'color lightgray',
            [
                [ 'color', { color: palette.lightgray } ]
            ]
        ],
        [
            'Now draw a `circle` with a size of `5`',
            'circle 5',
            [
                [ 'ellipse', { rx: 5, isCircle: true } ]
            ]
        ],
        [
            'Looking good! Now move the cursor to the right for the second eye - **type** `move 30, 0`',
            'move 30, 0',
            [
                [ 'move', { dx: 30, dy: 0 } ]
            ]
        ],
        [
            'Set the `color` back to `black` for the second eye',
            'color black',
            [
                [ 'color', { color: palette.black } ]
            ]
        ],
        [
            'Draw the second eye with an ellipse - **type** `ellipse 20, 30`',
            'ellipse 20, 30',
            [
                [ 'ellipse', { rx: 20, ry: 30 } ]
            ]
        ],
        [
            'Set the `color` to `lightgray`',
            'color lightgray',
            [
                [ 'color', { color: palette.lightgray } ]
            ]
        ],
        [
            'Draw a `circle` with size `5`',
            'circle 5',
            [
                [ 'ellipse', { rx: 5, isCircle: true } ]
            ]
        ],
        [
            'Almost there! Set the `color` to `white`',
            'color white',
            [
                [ 'color', { color: palette.white } ]
            ]
        ],
        [
            'Now move the cursor to the bottom - **type** `move -80, 150`',
            'move -80, 150',
            [
                [ 'move', { dx: -80, dy: 150 } ]
            ]
        ],
        [
            'Let\'s open a loop - **type** `for i in [ 0 .. 5 ]`',
            'for i in [ 0 .. 5 ]',
            [
                [ 'for-loop', { iterator: 'i', range: '0..5' } ]
            ]
        ],
        [
            'Draw a `circle` with a size of `45`',
            'circle 45',
            [
                [ 'ellipse', { rx: 45, isCircle: true } ]
            ]
        ],
        [
            'And move the cursor slightly to the right - **type** `move 45, 0`',
            'move 45, 0',
            [
                [ 'move', { dx: 45, dy: 0 } ]
            ]
        ],
    ])
};