// Java program to demonstrate insert operation 
// in binary search tree with parent pointer 
import java.util.*;

class GfG { 
  
static class Node 
{ 
    int key; 
    Node left, right, parent; 
}
  
// A utility function to create a new BST Node 
static Node newNode(int item) 
{ 
    Node temp = new Node(); 
    temp.key = item; 
    temp.left = null;
    temp.right = null; 
    temp.parent = null; 
    return temp; 
} 

static Node findNode(Node root, int myNode) {
    if(root == null) {
        return null;
    }
    if(myNode == root.key) {return root;}
    Node nodeFound = findNode(root.left, myNode);
    if(findNode(root.left, myNode) == null) {
        nodeFound = findNode(root.right, myNode);
    };
    return nodeFound;
}   
static void findDistanceNodes(Node root, int distance, Node currentNode, ArrayList<Integer> solution, Map<Integer, Boolean> visited) {
    if(root == null || distance < 0 || visited.get(root.key)) {return;}
    visited.put(root.key, true);
    if(distance == 0) {
        solution.add(root.key);
        return;
    }
    findDistanceNodes(root.left, distance - 1, currentNode, solution, visited);
    findDistanceNodes(root.right, distance - 1, currentNode, solution, visited);
    findDistanceNodes(root.parent, distance - 1, currentNode, solution, visited);
}
    
public static ArrayList<Integer> KDistanceNodes(Node root, int target , int k)
{
    Node currentNode = findNode(root, target);
    ArrayList<Integer> solution = new ArrayList<Integer>();
    Map<Integer, Boolean> visited = new HashMap<Integer, Boolean>();
    findDistanceNodes(currentNode, k, currentNode, solution, visited);
    return solution;
}
  
// A utility function to do inorder traversal of BST 
static void inorder(Node root) 
{ 
    if (root != null) 
    { 
        inorder(root.left); 
        System.out.print("Node : "+ root.key + " , "); 
        if (root.parent == null) 
        System.out.println("Parent : NULL"); 
        else
        System.out.println("Parent : " + root.parent.key); 
        inorder(root.right); 
    } 
} 
  
/* A utility function to insert a new Node with 
given key in BST */
static Node insert(Node node, int key) 
{ 
    /* If the tree is empty, return a new Node */
    if (node == null) return newNode(key); 
  
    /* Otherwise, recur down the tree */
    if (key < node.key) 
    { 
        Node lchild = insert(node.left, key); 
        node.left = lchild; 
  
        // Set parent of root of left subtree 
        lchild.parent = node; 
    } 
    else if (key > node.key) 
    { 
        Node rchild = insert(node.right, key); 
        node.right = rchild; 
  
        // Set parent of root of right subtree 
        rchild.parent = node; 
    } 
  
    /* return the (unchanged) Node pointer */
    return node; 
} 
  
// Driver Program to test above functions 
public static void main(String[] args) 
{ 
    /* Let us create following BST 
            50 
        /     \ 
        30     70 
        / \ / \ 
    20 40 60 80 */
    Node root = null; 
    root = insert(root, 50); 
    insert(root, 30); 
    insert(root, 20); 
    insert(root, 40); 
    insert(root, 70); 
    insert(root, 60); 
    insert(root, 80); 
    insert(root, 90); 
    // print iNoder traversal of the BST 
    // inorder(root); 
    ArrayList<Integer> nd = KDistanceNodes(root, 70, 2);
    for(int i = 0; i < nd.size(); i++) {
        System.out.println(nd.get(i));
    }
}
} 