# NEEDLE
Tailor-Made Tools for Unity

- [**AR Desktop**](#ar-desktop)  
*Non-invasive AR Foundation mock and simulation system*

- [**Package Tools**](#package-tools)  
*Complete Suite for developing and maintaining custom UPM packages*

- [**Structure**](#structure)   
*Asset Testing and Analysis for Unity projects*

- [**Better Unity Fogbugz**](#better-unity-fogbugz)  
*Chrome Extension to make Bug Cases more useful*

## AR Desktop

AR Desktop is a suite of tools that allow local testing and development of AR Foundation applications directly inside Unity Editor.

This greatly accelerates everyday AR development and reduces the amount of times device deployments need to be made.

Each case where the in-editor behaviour differs from a real device is considered a bug. Please let us now, and we'll fix it!

### Design Goals

### Features
- camera navigation
- touch support (both Old and New Input System)
- light estimation
- plane detection
- simulated point clouds and meshing
- simulated real world environment with camera image
- works with both Built-in and URP render pipeline

### Currently not supported
- environment probe simulation on all platforms but OpenGL Core <sup>[Case 1215635](https://issuetracker.unity3d.com/issues/cubemap-dot-createexternaltexture-does-not-produce-correct-cubemap-when-using-getnativetextureptr-from-an-existing-one)</sup>
- face tracking
- human pose tracking
- any kind of remoting to running devices

### Comparison to MARS
After years of non-existant tooling for AR development, Unity is now working on Project MARS - which is supposed to allow both in-editor simulation and device recording and remoting.

However, from the limited available public information, it seems that the design goals for MARS are very different to what we're trying to achieve with AR Desktop:

|   | AR Desktop    | MARS  |
| -: | -:             | :-:     |
| Project Setup | drop-in for AR Foundation projects | wrapper around AR Foundation, requires specific project structure |
| Coding Style | 

------------

| T | A | B | L | E |
| - | - | - | - | - |
| t | a | b | l | e |


---
## Package Tools

Package Tools are a collection of helpers for working with Unity packages.

This includes tools for development, maintenance of existing packages, creating and releasing new packages, updating packages in a project, analyzing packages and their dependencies.

Package Tools have been used in production across multiple companies for many months, and turned out to be very solid and improve the pace of package development considerably.

### Differences to official Unity packages
Unity Package Verification Tools
Unity 

### Package Updater
Change versions of multiple packages at once

Update selected packages in a project

Has sane update rules:
- preview packages are updated to latest preview
- non-preview packages are updated to latest non-preview
- packages not in manifest are not updated by default, but you can still choose to

### Local/Release Switch
With a single button, you can switch a remote package to a local source (e.g. git folder). After doing your changes, you can release the package, and switch back to the released version.

### Release Master

---
## Structure
### Analysis Tools


---
### Asset Testing
Asset testing helps finding problems in project assets fast and early supporting a wide range of built-in (but also extensible) tests that are easy to setup and configure.

---
## Better Unity Fogbugz
Better Unity Fogbugz is a Chrome Extension that improves the usefulness and usablity of Unity's bug tracker system.

We created it for an anniversary - herbst's 200th submitted Unity bug. It's already proven very helpful in following up with the QA teams on specific bugs, seeing which cases have or haven't got an answer, and seeing which Issues are linked to which case.

Better Unity Fogbugz is available for free on the Chrome Web Store.

### FAQ
Q: I would like to use Better Unity Fogbugz on mobile.

A: While Chrome for Android and Chrome for iOS do not support Extensions, there are Chromium-based browsers that do - one of them is the Kiwi Browser.

[1]: