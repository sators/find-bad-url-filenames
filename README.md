# find-bad-url-filenames

A node script for recursively finding filenames that include reserved filename characters.  The process will exit with error code 1 if a bad filename is found.

## Usage

```
$ npm install -g find-bad-url-filenames
```
or
```
$ npx find-bad-url-filenames
```

Then...

```
// Search thru specific path
$ find-bad-url-filenames [path]
$ npx find-bad-url-filenames [path]
```
or
```
// Search thru current folder
$ find-bad-url-filenames
$ npx find-bad-url-filenames
```

## Example

Searching through a folder in the home directory called "project" that has a file by the name of `bad*file.#`

```
$ find-bad-url-filenames ~/project
```
Outputs:
```
Found bad filenames:
[
  '/Users/johndoe/project/bad*file.#'
]
```