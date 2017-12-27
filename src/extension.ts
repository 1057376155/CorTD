'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    var editor = vscode.window.activeTextEditor;
    let document = editor.document;
    let selection = editor.selection;
    
    vscode.commands.registerCommand('extension.triggerDown', () => {
        editor.edit((editBuilder) => {
            var str="↓";
            selection = editor.selection;
            editBuilder.insert(new vscode.Position(selection.active.line,selection.active.character),str);
        },{ undoStopBefore: false, undoStopAfter: false })
    });
    vscode.commands.registerCommand('extension.triggerUp', () => {
        editor.edit((editBuilder) => {
            var str="↑";
            selection = editor.selection;
            editBuilder.insert(new vscode.Position(selection.active.line,selection.active.character),str);
        },{ undoStopBefore: false, undoStopAfter: false })
    });
}

export function deactivate() {
}