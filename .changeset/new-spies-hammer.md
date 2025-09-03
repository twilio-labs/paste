---
"@twilio-paste/file-uploader": patch
---

fix(FileUploaderDropzone): honor acceptedMimeTypes prop during drag and drop operations
Previously, the FileUploaderDropzone component would ignore the acceptedMimeTypes prop when files were dragged and dropped, only validating file types when using the native file picker. This fix ensures that MIME type validation is consistently applied to both drag-and-drop and file input selection methods.

Added MIME type validation to drag and drop event handler
Added support for wildcard MIME type patterns (e.g., "image/\*")
Added console warnings for rejected file types
Maintained backward compatibility - no breaking changes to existing API
Added comprehensive test coverage for validation scenarios

Fixes #4377
