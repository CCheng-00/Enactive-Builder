# Explanation Playground

An interactive tool for building clear, structured explanations by combining different explanation blocks into a coherent whole.

## Overview

Explanation Playground is a React application that helps you create more effective explanations by arranging different explanation strategies (definition, example, analogy, etc.) into a structured flow. It leverages AI to blend these strategies into natural-sounding explanations.

## Features

- **Block-Based Structure**: Build explanations using predefined blocks like Definitions, Examples, Analogies, and Claims
- **Custom Blocks**: Create your own explanation block types
- **Branching Explanations**: Create alternative explanation paths from any block
- **Block Blending**: Combine blocks by dragging one onto another
- **AI Generation**: Generate natural-sounding explanations from your block structure
- **Visual Structure**: See your explanation structure in a tree view
- **History & Comparison**: Compare different explanation approaches side-by-side
- **Export Options**: Save your work as JSON or Markdown

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
   ```
   git clone https://github.com/CCheng-00/Enactive-Builder.git
   cd explanation-playground
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory:
   ```
   REACT_APP_OPENAI_API_KEY=your_api_key_here
   ```

4. Start the frontend development server
   ```
   npm start
   ```

5. Start the backend server
   ```
   cd server
   npm install
   npm start
   ```

The application should now be running at http://localhost:3000 with the backend API at http://localhost:5000.

## Usage

1. **Enter a prompt**: Type what you want explained in the prompt field.
2. **Add explanation blocks**: Click on block types from the tray to add them to your chain.
3. **Arrange blocks**: Drag and drop to reorder the blocks in your explanation.
4. **Create branches**: Click the "Branch" button on any block to create alternative explanation paths.
5. **Blend blocks**: Drag one block onto another to combine their purposes.
6. **Generate explanation**: Click "Generate Explanation" to create a cohesive explanation from your blocks.
7. **Compare versions**: Use the history tab to compare different explanation versions.
8. **Export**: Save your explanation structure and output as JSON or Markdown.

## Project Structure

```
explanation-playground/
├── src/
│   ├── App.js            # Main application component
│   ├── TreeView.js       # Component for visualization of explanation structure
│   └── ...               # Other React components
├── server/
│   ├── index.js          # Express server setup
│   └── ...               # API routes and controllers
├── tailwind.config.js    # Tailwind CSS configuration
└── .env                  # Environment variables (REACT_APP_OPENAI_API_KEY)
```

## Advanced Usage Tips

1. **Double-click to activate**: Double-click on any block to make it the active target for new blocks.

2. **Text highlighting**: When viewing a generated explanation, you can select text and it will offer to create a new block from your selection.

3. **Blending blocks**: To blend two blocks together, drag one block on top of another and confirm the merge when prompted.

4. **Troubleshooting**:
   - If the explanation doesn't generate, check your OpenAI API key
   - Make sure your backend server is running at http://localhost:5000
   - Ensure you have blocks added to your active chain

## Development Notes

- The app uses the OpenAI API for generating explanations
- Calls go through the Express backend to protect your API key
- The default port for the backend server is 5000
- All API calls are sent to the `/api/explain` endpoint

## Browser Compatibility

Explanation Playground works best in modern browsers like Chrome, Firefox, Safari, and Edge.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React and TailwindCSS
- Drag and drop functionality powered by dnd-kit
- AI explanations powered by OpenAI (GPT)
- Thank you Jose for being patient and a great prof, sorry it has taken me so long
