# AssetStore Submission Guidelines

## Include demo

If your product has content to show off, it should be displayed in a demo scene. Please provide a practical demo with all of your assets set up in a lighted scene, and if your package has multiple assets, please have an additional demo scene that displays all of your assets in a grid or a continuous line. If your asset is based on scripting, you still have to add a demo scene showcasing the asset or showing setup steps in the scene. Although, if your asset is an Editor extension, which works out of the box and has clear documentation, you may not add a demo scene. (Submission Guidelines, Section 3.3.a)

##   Include prefabs

Each mesh should have a corresponding prefab set up with all variations of the texture/mesh/material that you are providing. Please create prefabs for all of your imported objects. (Submission Guidelines, Section 4.1.e)

##  Reset prefabs

Prefabs must have their position/rotation set to zero upon import and should have their scale set to 1.

## Include colliders

Prefabs with meshes inside them have to have colliders applied to them. Please make sure you have appropriately sized colliders applied to your prefabs. Please keep in mind that colliders are not always required and we recommend putting colliders on static models.

## Empty Prefab

Prefabs cannot be empty, please make sure that you set up your prefabs correctly.

##  Include documentation

If your asset contains any code (scripts, shaders) - we ask that you include offline documentation in the format of pdf or rtf with your submission, as it is mandatory for all packages that include scripts or other components that require set up. Your documentation must be organized with a table of contents and numbered, written in English and have no grammar mistakes. Create a setup guide with a step-by-step tutorial (pdf or video), as well as a script reference if users will need to do any coding. (Submission Guidelines, Section 3.2.a) 
If your asset contains art (3D models, sprites) and you used code to set up a demo scene, you may skip this step.

## Fix orientation

Meshes must have the correct orientation. The proper orientation is: Z - Vector is forward, Y - Vector is up, X - Vector is Right. (Submission Guidelines, Section 4.1.j)

## Remove .jpg

We do not allow texture images that are saved as .jpg. Please save all of your images as lossless format file types, such as PNG or TGA. (Submission Guidelines, Section 4.1.3.a)

## Remove .unitypackage

You must not include a .unitypackage file within your submission. If there is content within the .unitypackage file that is important for you to include, please put it in a regular folder in your folder structure. Submissions that include set up preferences, settings or supplemental files for another Asset Store product must be nested in a .unitypackage file. If you want to add different render pipeline (RP) versions to your package, you can add the RP specific files into .unitypackage. (Submission Guidelines, Section 3.4.a)

##  Missing reference

We do not allow missing or broken material/texture/prefab/script connections in your package. Before submitting your asset and creating your package, be sure to test it! Create a new project and import your package into it. Check that everything works properly—and make sure that textures are linked to their respective materials. We often receive packages which do not work, throw exceptions, have unlinked textures and problems with surface normals.

## Remove JavaScript

As of version 2017.2, Unity has deprecated UnityScript and we will no longer be accepting projects that include .js files.

##  Remove Mp3

We do not recommend audio files that are saved as .mp3. Please save all of your audio as lossless format file types, such as .wav or .ogg.

##  Remove Videos

You cannot include a video file in your package. Please upload your video file to an online video hosting website (Youtube, Vimeo, etc.) and include the link to the video in your written documentation. This helps keep file sizes smaller and your package easier to download. (Submission Guidelines, Section 3.2.g)

##  Remove Executables files

Your package must not contain an .exe or installer program or application. If your plugin requires an external program to run, please remove the installer program from your package and write the instructions on how to download and install the installer program in your documentation. (Submission Guidelines, Section 1.2.f)

##  Remove Mixamo files

We do not allow or accept packages files that were made with third-party software, such as Mixamo, Fuse, etc. because these files are under licensing that does not agree with the Asset Store End User License Agreement (EULA). Please read the third-party software’s “Terms of Use” before you submit it to an online store. (Submission Guidelines, Section 1.1.1.a)

## Texture Import Settings incorrect

Your asset is not set up to work "out of the box". The textures in the package are compressed into a smaller size than actual texture resolution. We recommend changing the individual textures' compression details in Unity before submitting the asset.

##  Remove SpeedTree files

You cannot redistribute SpeedTree files on other marketplaces. Please remove all SpeedTree files that are under this license. (Submission Guidelines, Section 1.1.c)

##  Remove Duplicate Animation names

Your animation cannot contain duplicate names. The user can either use one animation per prefab or have to rename all animation files in the fbx objects themselves.  Make sure that your animations have a naming convention which is easy to understand. Please use underscores or numbers if needed.

##  Check LODs on your Prefabs

We do not allow prefabs that contain a mesh with "LOD" written in the name but do not contain a "LOD" element or more than 1 mesh attached. Please make sure that "LODs" are correctly set up in the prefab. Refer to this guide to set up your "LODs": https://docs.unity3d.com/Manual/class-LODGroup.html