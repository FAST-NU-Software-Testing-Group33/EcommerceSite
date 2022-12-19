using System.Collections;
using UnityEngine;
using UnityEngine.Assertions;
using UnityEngine.TestTools;

namespace Tests
{
    public class MovementTests
    {
        [UnityTest]
        public IEnumerator UpMovement()
        {
            var gameObject = new GameObject();
            var player = gameObject.AddComponent<PlayerMovement>();
            player.Move(Vector3.up);
            yield return null;
            Assert.IsTrue(player.transform.position.y > 0);
        }
        
        [UnityTest]
        public IEnumerator DownMovement()
        {
            var gameObject = new GameObject();
            var player = gameObject.AddComponent<PlayerMovement>();
            player.Move(Vector3.down);
            yield return null;
            Assert.IsTrue(player.transform.position.y < 0);
        }
        
        [UnityTest]
        public IEnumerator LeftMovement()
        {
            var gameObject = new GameObject();
            var player = gameObject.AddComponent<PlayerMovement>();
            player.Move(Vector3.left);
            yield return null;
            Assert.IsTrue(player.transform.position.x < 0);
        }
        
        [UnityTest]
        public IEnumerator RightMovement()
        {
            var gameObject = new GameObject();
            var player = gameObject.AddComponent<PlayerMovement>();
            player.Move(Vector3.right);
            yield return null;
            Assert.IsTrue(player.transform.position.x > 0);
        }
    }
}
