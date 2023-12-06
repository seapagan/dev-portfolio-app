---
sidebar_position: 4
---
# The ".env" file

## Overview

The `.env` file is used to store sensitive information such as API keys,
database passwords, and so on. It should not be committed to your
repository or shared with anyone else.

For this project, the `.env` file is used to :

- Store the GitHub Personal Access Token (PAT) which is used to query the GitHub
API for the 'Open Source' section of the portfolio app. Without this, that
section will not work.
- Store the Google Analytics Tracking ID which is used to track visitors to the
portfolio app. Without this, the Google Analytics section will not work.

## Create the ".env" file

This is a simple text file which should be created in the root directory of the
project. It should be named `.env` (note the leading dot) and should contain
keys as described below.

There is an example `.env` file in the root directory of the project which you
can use.

## Add the GitHub Personal Access Token

The GitHub Personal Access Token (PAT) is used to query the GitHub API for the
'Open Source' section of the portfolio app. Without this, that section will not
work. Define your PAT on GitHub (it is account wide, not per-repository)
[here](https://github.com/settings/tokens). You should create a `classic` token,
and it **does not need any permissions**. Copy the token and paste it into the
`.env` file as follows:

```ini
VITE_GH_TOKEN=ghp_1234567890abcdefghij1234567890abcdefghij
```

## Add the Google Analytics Tracking ID

If you want to use Google Analytics to track visitors to your portfolio app,
you will need to create a Google Analytics account and then create a new
property. Once you have done this, you will be given a Tracking ID which you
should copy and paste into the `.env` file as follows:

```ini
VITE_GA_ID=G-1234567890
```

This should be a **V4** Tracking ID, not a V3 Tracking ID or lower, it will
begin with a `G-` prefix.
