# Brief Introduction

This is a cloned website of tesla home page built with react js. The page has simillar sections which made it to builed reusable components with react.

# My Approach

My approach consists of two reusable components, NavBar and HomePage. When you click the menu button, a sidebar is displayed. Click 'x-icon' to close the sidebar without disturbing the entire interface.

In order to render background images based on display width, I am using the 'windows.innerWidth' property. The innerWidth property returns the width of a window's content area.
In this project, I am using useState Hook for callback syntax to get previous state values of the sidebar and store the value of the boolean value status of the sidebar and change the status by clicking the menu button or x-icon.
