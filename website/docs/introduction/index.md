---
sidebar_position: 1
---

# Introduction

:::warning[Beta Docs!]

This documentation is still a work in progress, and is not yet complete.

:::

A totally stand-alone React based developers portfolio website, taking all data
from a local JSON file. The Application is **Fully Responsive**, reads your
GitHub **repository data in real-time**, has **Social Media buttons**, and can
be configured using one simple file - **No Coding needed**.

---

![Website Preview](img/webpage_image.png)

:::tip[My Portfolio in action]

A live working version can be found on my own pages at
[www.gnramsay.com](https://www.gnramsay.com)

:::

## Getting Started

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above is
  recommended to run the application and develop locally. Once the application
  is built, it can be deployed to any web server that can serve static files.

## Functionality

- **Hero section**
  - A Tagline and brief statement of your philosophy.
- **About Me**
  - A brief couple of paragraphs to describe/sell yourself.
- **My Skills**
  - Displays brief info about the main Skills you have, and a list of other
    perhaps lesser but still relevant skills.
- **My Experience**
  - List your Job/Project experience with dates, notable responsibilities etc.
- **OpenSource Projects**
  - Queries `Github` (In future I hope to add GitLab and Bitbucket) in real time
    and displays the PUBLIC repositories for the supplied User. You can also
    provide multiple users if you have multiple accounts for example. These can
    be folded away if required.
- **Contact Me**
  - The final statements and contact information
- **Social Media buttons**
  - Customisable buttons to link to your Social Media presence.
- **Light / Dark mode**
  - Toggle to choose own preference
  - Defaults to using the Operating System preference, if Supported. So far
    tested to work on Windows, Linux, OSX and iOS.

All of the information contained in the above are fully customisable using the
`settings.js` file, no actual programming or modification to the React code is
needed.

## License

This project is licensed under the terms of the MIT license, so you can use it
as described below:

:::tip[MIT License]

MIT License

Copyright (c) 2023 Seapagan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

:::
