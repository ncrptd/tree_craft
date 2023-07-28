# Tree Craft

Live Link: https://tree-craft.vercel.app/
Overview
This is a web application that allows users to manage a tree structure with container nodes and leaf nodes. Each node can have unique content associated with it, which can be text, images, videos, 3D diagrams, custom activities, or any generic object. The application uses localStorage to save and retrieve the tree structure and its associated content, ensuring that the data remains persistent even after closing the browser.

## Features
1. Tree Structure Management: Users can add and remove nodes to the tree structure on the left panel. The depth of the tree is not limited, allowing users to create complex hierarchical structures.

2. Container Nodes and Leaf Nodes: There are two types of nodes in the tree: container nodes and leaf nodes. Container nodes can contain other nodes, while leaf nodes do not have any children.

3. LocalStorage Integration: The tree structure and its associated content are stored in the browser's localStorage. This ensures that the data is saved and retrieved locally, without the need to integrate with any external APIs.

4. Static Menu Popups: Upon hovering over certain UI elements, static menu popups provide additional options for managing the tree, such as adding a new node or deleting a node.

## Usage

1. Adding Nodes: To add a new node, users can right-click on a container node and select "Add Node" from the context menu. They can then choose whether the new node will be a container or a leaf node and provide the unique content associated with it.

2. Removing Nodes: Users can remove a node by right-clicking on the node they wish to delete and selecting "Delete Node" from the context menu. This will remove the node and all its children, if any.

3. Static Menu Popups: Hovering over certain UI elements will trigger static menu popups, which provide quick access to common actions like adding a new node.

4. Saving and Retrieving Data: The tree structure and content are automatically saved to localStorage whenever there are any changes. When the application is opened again, it retrieves the saved data from localStorage, ensuring data persistence.

## Technologies Used

React.Js, Redux-toolkit, TailwindCss For building the front-end interface and interactions.

LocalStorage: For storing the tree structure and associated content locally in the browser.
Installation

