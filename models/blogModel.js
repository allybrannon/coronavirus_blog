const db = require("./conn");

class BlogModel {
  constructor(id, blogger, blog_name, date_blogpost, blogpost) {
    this.id = id;
    this.blogger = blogger;
    this.blog_name = blog_name;
    this.date_blogpost = date_blogpost;
    this.blogpost = blogpost;
  }

  static async getallBlog() {
    try {
      const response = await db.any(`SELECT * FROM coronablog`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }
}

module.exports = BlogModel;
