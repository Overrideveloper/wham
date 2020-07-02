# Wham!

# What is Wham?
Wham is a purely a game of luck. A guessing game of some sort.

# What is Wham! built with?
Wham is built with the following tools/technologies:
- HTML
- CSS
- JavaScript
- Vue
- ASP.NET Core MVC
- Turbolinks

# How to run
This section assumes you have the .NET Core SDK installed.

1. Clone this repository
2. Navigate to the cloned repository's directory
3. Run the project.

   This project can be run in **normal** and **watch** mode.

    ```
    # normal mode
    dotnet run    
    ```

    ```
    # watch mode
    dotnet watch run
    ```

# How to play
Wham is purely a game of luck. A guessing game of some sort.<br/>

There are two players, one on **offense** and the other on **defense**.<br/>

The "game area" is a **3x3** grid with 9 tiles.<br/>

The goal of the game is for the player on **offense** to guess which tile in the grid the player on **defense** selected.<br/>

If the player on **offense** guesses incorrectly, the roles are switched.<br/>

Each correct guess is a point. Incorrect guesses have no penalties.<br/>

The game ends when there's only one tile left.