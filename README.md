# Task Tracker Bot

Hello, this is my personal bot for tracking tasks! There may still be some errors, so if you find any, please report them to me, and I’ll see if I can fix them.

## Database Information

This project uses PostgreSQL as its database.

## Setup

To configure the bot, copy the `.env.example` file to create a `.env` file in the root directory. Then, fill in the variables with your own secrets.

## Usage

Here are the available commands:

- **/get**  
  Get the oldest undone task.

- **/get_all**  
  Get all undone tasks.

- **/random**  
  Get a random undone task.

- **/done [task IDs]**  
  Use this command to mark tasks as completed. For example,  
  `/done 1 2 3` will mark tasks 1, 2, and 3 as done.

- **/undone [task IDs]**  
  Use this command to mark tasks as incomplete. For example,  
  `/undone 2 3` will mark tasks 2 and 3 as undone while keeping task 1 marked as done.

To add a new task, just send your text message to the bot, and it will automatically be inserted into the database.

---

Feel free to use this and let me know if you need any further changes!
