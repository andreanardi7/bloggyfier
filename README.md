<h1>Bloggybase</h1>
<h2>The idea</h2>
<p class="paragraph">
  This project's goal is to develop a centralized open-source solution for
  easily creating impressive blogs and seamlessly integrating them into your
  website.
</p>
<p class="paragraph">
  Additionally, it aims to streamline the collaboration between developers and
  article writers. It does so by generating an HTML snippet that references a
  file stored in the cloud. This means you won't have to manually update your
  website's HTML code every time a blog is modified or added.
</p>
<p class="paragraph">
  The editor page provides the option to use a wide range of HTML tags, enabling
  further customization such as making text <b>bold</b>, <i>italic</i>,
  <mark class="cdx-marker">marked </mark>and more.<br />Everything its super
  intuitive and interactive.
</p>
<img src="/img/img/white-theme.png"> </img>
<p class="paragraph">
  We also created a dark tone version for all the night owls out there that want
  to use it in the night:
</p>
<img src="/img/dark-theme.png" /> </img>

<p class="paragraph"><br />And here is an example output :<br /></p>
<pre><code class="code-block">&lt;div&gt;
  &lt;span id = rvQGEKngJW&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;script src="https://www.bloggybase.com/reader.js?id="rvQGEKngJW" &gt;
&lt;/div&gt;

// Where id is the generated name of your file</code></pre>
<p class="paragraph">
  The only remaining task for you is to integrate this code snippet into your
  website, and it will automatically stay synchronized whenever anyone makes an
  update.
</p>
<br />
<h3>How was this achieved?</h3>
<p class="paragraph">
  This project began as a means to leverage Wingloud for a deeper comprehension
  of its core concepts.
</p>
<p class="paragraph">
  While the concept of Infrastructure as Code was not new to us, we aimed to
  enhance our understanding by implementing it in a real-world application.<br />
</p>
<p class="paragraph">
  By adopting WingLang, we easily created Buckets and APIs to manage all the
  backend code required for writing, reading, and storing the necessary
  components to operate this web application.&nbsp;&nbsp;<br />
</p>
<h3>Future improvements</h3>
<p class="paragraph">
  There are still some minor bugs that require resolution, and we also aim to
  introduce new features, including:<br />
</p>
<ol>
  <li>The ability to edit existing HTML files.</li>
  <li>
    The inclusion of a login form to enhance the management of your code
    snippets.
  </li>
  <li>
    A landing page where you can find clear explanations and options to either
    log in, create new content, or edit existing files.
  </li>
</ol>
<br />
<p class="paragraph">
  The highly interactive features are powered by the JavaScript library
  Editor.js
</p>
<p class="paragraph">conversion from plain text to HTML is facilitated by:</p>
<h3>Contributors</h3>
<h2>This markdown file was created using bloggybase</h2>
<blockquote>
  <p>"True wisdom lies in solving problems before they arise."</p>
  <cite>Me</cite>
</blockquote>