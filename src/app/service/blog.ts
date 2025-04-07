export const fetchBlog = async (id?: string, type?: string, limit?: number, page?: number) => {
  try {
    let url = id ? `/api/blog/${id}` : '/api/blog';
    if (type) {
      url = `${url}${url.includes('?') ? '&' : '?'}type=${type}`;
    }
    if (limit) {
      url = `${url}${url.includes('?') ? '&' : '?'}limit=${limit}`;
    }
    if (page) {
      url = `${url}${url.includes('?') ? '&' : '?'}page=${page}`;
    }
    

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog data');
    }
    
    const result = await response.json();
    
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.message || 'Failed to fetch blog data');
    }
  } catch (error) {
    console.error('Error in fetchBlog service:', error);
    throw error;
  }
};

export const fetchBlogList = async (type?: string, limit?: number, page?: number) => {
  return fetchBlog(undefined, type, limit, page);
};
