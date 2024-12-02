# React WP Gutenberg Team Member Block

This project is a custom WordPress Gutenberg block named **Team Member**, built using React and WordPress Block Editor APIs. The block allows users to easily add and configure team member profiles, including options for adding a photo, name, and designation.

## Features

- Upload a team member's image with replace and remove options.
- Add a team member's name and designation using rich text editing.
- Responsive design to display the team members in various layouts.
- Built with modern tools including React, ES6+, and WordPress Block Editor APIs.

## File Structure

```plaintext
src/
├── blocks/
│   └── team-member/
│       ├── arrow_right.svg
│       ├── block.json
│       ├── edit.js
│       ├── icon.svg
│       ├── index.js
│       ├── index.php
│       ├── save.js
│       ├── style.css
```

## File Descriptions

- **block.json**: Block metadata including attributes, scripts, and styles.  
- **edit.js**: Contains the React component for the block's editor interface.  
- **save.js**: Defines the block's output in the front end.  
- **index.js**: Registers the block with WordPress.  
- **index.php**: Registers the block type server-side.  
- **style.css**: Contains the block's styles for the front end and editor.  

## Installation

1. Clone the repository:  
  ```bash
  git clone https://github.com/tekrajbhatta/react-wp-gutenberg-team-member.git
  ```
2. Navigate to your WordPress installation and place the block in the desired directory, typically:
  ```bash
  wp-content/mu-plugins/vdplug/src/blocks/team-member
  ```
3. Register the block in your custom plugin or theme.  
4. Run `npm install` to install dependencies (if applicable).  

## Usage

1. Navigate to the WordPress Block Editor.  
2. Add the **Team Member** block to your page or post.  
3. Customize the image, name, and designation to showcase your team members.  

## License  

This project is licensed under the [MIT License](LICENSE).  

---

Feel free to contribute, suggest features, or report issues!  

**Author**: Tek Raj Bhatt
**GitHub Repository**: [React WP Gutenberg Team Member](https://github.com/tekrajbhatta/react-wp-gutenberg-team-member)
