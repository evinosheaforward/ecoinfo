module ApplicationHelper
  def link_to2(*args, &block)
    if block_given?
      options      = args.first || {}
      html_options = args.second || {}
    else
      name         = args.first
      options      = args.second || {}
      html_options = args.third || {}
    end

    if current_page?(options) or as_array(html_options[:extra_current]).any? {|o| current_page2? o}
      html_options[:class] = add_class(html_options[:class], "current")
    end

    html_options.delete(:extra_current)

    if block_given?
      link_to(options, html_options, &block)
    else
      link_to(name, options, html_options, &block)
    end
  end

  private

  def add_class(classes, new_class)
    ((classes or "").split(" ") << new_class).join(" ")
  end

  def as_array(o)
    if o == nil
      []
    elsif not o.is_a? Array
      [o]
    else
      o
    end
  end

  # current_page? of {:controller => :blah, :action => :bleh} when the routes also require an id raises a route error. current_page2? doesn't.
  def current_page2?(p)
    current_page? p
  rescue
    return false
  end
end
