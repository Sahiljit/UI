This project is initialized with the help of following youtube playlist -

https://www.youtube.com/playlist?list=PLcfAVClOb1BiA6oIfHQ6Am3lpWzOmMO6J

plus the following video to split the library into multiple bundles.

https://www.youtube.com/watch?v=LMxrUHofe4Y

Explanation in summary -

In vite.config.ts, we define the entry points and what namaes to give to the build files after vite builds for us.
Then in package.json, we map name of sub-modules with the build files from the build folder.

How we consume the library (i.e the name of sub-modules) is defined in package.json's export.
and the key-value pairs of "export" is mapped as per names inside our build folder.
