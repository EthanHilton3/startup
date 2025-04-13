# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Git

All of this requires that you commit often. You should get in the habit of consistently making a small stable change and then committing.

Verify you have the latest code (git pull)
Refactor, test, and/or implement a small portion of cohesive code (test code test)
Commit and push (git commit git push)
Repeat

## AWS

My IP address is: 107.21.94.91

how to access my AWS server: 

```
ssh -i ~/Downloads/260key.pem ubuntu@107.21.94.91
```

```
ssh -i ~/Downloads/260key.pem ubuntu@peachfromtheirs.click
```
check logs
```
pm2 logs startup
```


## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

deployment command simon: ./deployFiles.sh -k ~/Downloads/260key.pem -h peachfromtheirs.click -s simon

deployment command startup: ./deployFiles.sh -k ~/Downloads/260key.pem -h peachfromtheirs.click -s startup


This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

deployment commands:

Simon: ./deployReact.sh -k ~/Downloads/260key.pem -h peachfromtheirs.click -s simon

Startup: ./deployReact.sh -k ~/Downloads/260key.pem -h peachfromtheirs.click -s startup

## React Part 2: Reactivity

```
./deployReact.sh -k ~/Downloads/260key.pem -h peachfromtheirs.click -s simon
```

```
./deployReact.sh -k ~/Downloads/260key.pem -h peachfromtheirs.click -s startup
```

## Service & DB & Websocket

```
./deployService.sh -k ~/Downloads/260key.pem -h peachfromtheirs.click -s simon
```

```
./deployService.sh -k ~/Downloads/260key.pem -h peachfromtheirs.click -s startup
```

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.


API https://github.com/Animechan-API/animechan/tree/main/client
