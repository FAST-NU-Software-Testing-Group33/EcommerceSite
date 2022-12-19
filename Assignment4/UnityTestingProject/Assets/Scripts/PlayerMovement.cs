
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    private void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
            Move(Vector3.up);
        else if (Input.GetKey(KeyCode.DownArrow))
            Move(Vector3.down);
        else if (Input.GetKey(KeyCode.LeftArrow))
            Move(Vector3.left);
        else if (Input.GetKey(KeyCode.RightArrow))
            Move(Vector3.right);
    }

    public void Move(Vector3 direction)
    {
        transform.position += direction * Time.deltaTime;
    }
}
