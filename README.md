# findBadFilenames

A node script for recursively finding filenames that include reserved filename characters.  The process will exit with error code 1 if a bad filename is found.

## Usage

```
$ npm install findBadFilenames
```

```
// Search thru specific path
$ find-bad-filenames [path]
```
or
```
// Search thru current folder
$ find-bad-filenames
```

## Example

Searching through a folder in the home directory called "project" that has a file by the name of `bad*file.#`

```
$ find-bad-filenames ~/project
```
Outputs:
```
Found bad filenames:
[
  '/Users/johndoe/project/bad*file.#'
]
```