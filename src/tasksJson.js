import React from "react";
const tasksJson =
    {
        "move_with_key":
            {
                "name": "Move With Key",
                "content": <p>The actor moves with left / right arrow key. </p>,
                "png":"https://raw.githubusercontent.com/emmableu/image/master/e115/move_with_key.png",
                "gif":"https://raw.githubusercontent.com/emmableu/image/master/e115/move_with_key.gif",
            },

        "spawn_of_clones":
            {
                "name": "Spawn of Clones",
                "content": <p>When the green flag is clicked, display two rows of actors.</p>,
                "png":"https://raw.githubusercontent.com/emmableu/image/master/e115/spawn_of_clones.png",
                "gif":"https://raw.githubusercontent.com/emmableu/image/master/e115/spawn_of_clones.gif",
            },
        "move_slowly_leftwards":
            {
                "name": "Move Slowly Leftwards",
                "content": <p>When the green flag is clicked, the star moves slowly leftwards.</p>,
                "png":"https://raw.githubusercontent.com/emmableu/image/master/e115/move_slowly_leftwards.png",
                "gif":"https://raw.githubusercontent.com/emmableu/image/master/e115/move_slowly_leftwards.gif",
            },


        "shoot_when_space_key_pressed":
            {
                "name": "Shoot When Space Key Pressed",
                "content": <p>When the space key pressed, A bullet shoots out of the gun.</p>,
                "png":"https://raw.githubusercontent.com/emmableu/image/master/e115/shoot_when_space_key_pressed.png",
                "gif":"https://raw.githubusercontent.com/emmableu/image/master/e115/shoot_when_space_key_pressed.gif",
            },


        "destroy_clone_on_touch":
            {
                "name": "Destroy Clone on Touch",
                "content": <><p>Delete a clone when it touches another actor</p></>,
                "png":"https://raw.githubusercontent.com/emmableu/image/master/e115/destroy_clone_on_touch.png",
                "gif":"https://raw.githubusercontent.com/emmableu/image/master/e115/destroy_clone_on_touch.gif",
            },

        "rotate_actor_on_touch":

            {
                "name": "Rotate Actor on Touch",
                "content":<> <p>the star rotates when touching the bullet. </p></>,
                "png":"https://raw.githubusercontent.com/emmableu/image/master/e115/rotate_actor_on_touch.png",
                "gif":"https://raw.githubusercontent.com/emmableu/image/master/e115/rotate_actor_on_touch.gif",
            },

        "destroy_clone_on_edge":
            {
                "name": "Destroy Clone on Edge",
                "content": <><p>If a sprite keeps creating clones without destroying it, it will take up a lot of resource.</p>
<p>Wrap clones of an actor around the screen. Delete a clone when it moves out of the snap stage.</p>
<p>You need to use the block “delete this clone”.</p></>,
                "png":"https://raw.githubusercontent.com/emmableu/image/master/e115/destroy_clone_on_edge.png",
                "gif":"https://raw.githubusercontent.com/emmableu/image/master/e115/destroy_clone_on_edge.gif",
            },

    }

export default  tasksJson;
