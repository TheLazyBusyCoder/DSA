# Java cheat sheet 
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Java DSA Cheat Sheet</title>
<style>
  body {
    font-family: "Courier New", monospace;
    background-color: #f4f4f4;
    color: #222;
    margin: 0;
    padding: 20px;
  }
  h1, h2 {
    text-align: center;
  }
  h2 {
    border-bottom: 2px solid #333;
    padding-bottom: 5px;
    margin-top: 30px;
  }
  pre {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }
  code {
    color: #0077aa;
  }
  ul {
    list-style-type: square;
    padding-left: 20px;
  }
</style>
</head>
<body>
<h1>Java DSA Cheat Sheet</h1>

<h2>1. Basic Syntax</h2>
<pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
</code></pre>

<ul>
  <li><code>int, long, double, boolean, char</code></li>
  <li><code>String s = "text"; s.length(); s.charAt(i); s.substring(a,b);</code></li>
  <li><code>Math.max(a,b), Math.min(a,b), Math.abs(x), Math.pow(a,b), Math.sqrt(x)</code></li>
</ul>

<h2>2. Arrays</h2>
<pre><code>int[] arr = {1, 2, 3};
int[] arr2 = new int[5];
Arrays.sort(arr);
Arrays.fill(arr, val);
int idx = Arrays.binarySearch(arr, key);
</code></pre>

<ul>
  <li>Iterate: <code>for(int x : arr)</code></li>
  <li>Copy: <code>int[] b = Arrays.copyOf(arr, n);</code></li>
</ul>

<h2>3. ArrayList</h2>
<pre><code>ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();
list.add(10);
list.get(0);
list.set(0, 20);
list.remove(0);
Collections.sort(list);
</code></pre>

<ul>
  <li><code>list.contains(x), list.size(), list.clear()</code></li>
</ul>

<h2>4. LinkedList</h2>
<pre><code>LinkedList&lt;Integer&gt; ll = new LinkedList&lt;&gt;();
ll.addFirst(1);
ll.addLast(2);
ll.removeFirst();
ll.removeLast();
ll.peek(), ll.poll();
</code></pre>

<h2>5. Stack</h2>
<pre><code>Stack&lt;Integer&gt; st = new Stack&lt;&gt;();
st.push(1);
st.pop();
st.peek();
st.isEmpty();
</code></pre>

<h2>6. Queue</h2>
<pre><code>Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();
q.add(1);
q.remove();
q.peek();
</code></pre>

<h2>7. PriorityQueue (Min / Max Heap)</h2>
<pre><code>PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;(); // Min-heap
pq.add(5);
pq.add(2);
pq.poll(); // smallest
pq.peek();

PriorityQueue&lt;Integer&gt; maxPQ = new PriorityQueue&lt;&gt;(Collections.reverseOrder());
</code></pre>

<h2>8. HashMap & HashSet</h2>
<pre><code>HashMap&lt;Integer, String&gt; map = new HashMap&lt;&gt;();
map.put(1, "A");
map.get(1);
map.containsKey(1);
map.remove(1);
for(Map.Entry&lt;Integer, String&gt; e : map.entrySet()) {
    System.out.println(e.getKey() + " " + e.getValue());
}

HashSet&lt;Integer&gt; set = new HashSet&lt;&gt;();
set.add(10);
set.contains(10);
set.remove(10);
</code></pre>

<h2>9. StringBuilder (Efficient Strings)</h2>
<pre><code>StringBuilder sb = new StringBuilder("abc");
sb.append("d");
sb.reverse();
sb.toString();
</code></pre>

<h2>10. Recursion Template</h2>
<pre><code>void solve(int i, int n) {
    if (i > n) return;
    // logic
    solve(i + 1, n);
}
</code></pre>

<h2>11. Sorting</h2>
<pre><code>Arrays.sort(arr);
Collections.sort(list);
Arrays.sort(arr, (a,b) -> a[0] - b[0]); // custom comparator
</code></pre>

<h2>12. Searching</h2>
<pre><code>int idx = Arrays.binarySearch(arr, key); // sorted only
</code></pre>

<h2>13. Useful Math & Utility</h2>
<pre><code>Math.max(a,b);
Math.min(a,b);
Math.abs(x);
Math.pow(a,b);
Math.sqrt(x);
Math.ceil(x);
Math.floor(x);
</code></pre>

<h2>14. Pair Class (Custom)</h2>
<pre><code>class Pair {
    int x, y;
    Pair(int x, int y) { this.x = x; this.y = y; }
}
</code></pre>

<h2>15. Graph & BFS / DFS Template</h2>
<pre><code>void dfs(int node, boolean[] vis, ArrayList&lt;ArrayList&lt;Integer&gt;&gt; adj) {
    vis[node] = true;
    for(int it : adj.get(node)) {
        if(!vis[it]) dfs(it, vis, adj);
    }
}

void bfs(int start, ArrayList&lt;ArrayList&lt;Integer&gt;&gt; adj) {
    boolean[] vis = new boolean[adj.size()];
    Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();
    q.add(start);
    vis[start] = true;
    while(!q.isEmpty()) {
        int node = q.poll();
        for(int it : adj.get(node)) {
            if(!vis[it]) {
                vis[it] = true;
                q.add(it);
            }
        }
    }
}
</code></pre>

<h2>16. Common Time Complexities</h2>
<ul>
  <li>Array Access: O(1)</li>
  <li>Array Search: O(n)</li>
  <li>Binary Search: O(log n)</li>
  <li>HashMap/Set: O(1) average</li>
  <li>Sorting: O(n log n)</li>
  <li>BFS/DFS: O(V + E)</li>
</ul>

<hr>
<p style="text-align:center;">Made for quick DSA reference ❤️</p>

</body>
</html>

```
