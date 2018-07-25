require 'test_helper'

class VisitorDataControllerTest < ActionDispatch::IntegrationTest
  setup do
    @visitor_datum = visitor_data(:one)
  end

  test "should get index" do
    get visitor_data_url
    assert_response :success
  end

  test "should get new" do
    get new_visitor_datum_url
    assert_response :success
  end

  test "should create visitor_datum" do
    assert_difference('VisitorDatum.count') do
      post visitor_data_url, params: { visitor_datum: { rating: @visitor_datum.rating, review: @visitor_datum.review } }
    end

    assert_redirected_to visitor_datum_url(VisitorDatum.last)
  end

  test "should show visitor_datum" do
    get visitor_datum_url(@visitor_datum)
    assert_response :success
  end

  test "should get edit" do
    get edit_visitor_datum_url(@visitor_datum)
    assert_response :success
  end

  test "should update visitor_datum" do
    patch visitor_datum_url(@visitor_datum), params: { visitor_datum: { rating: @visitor_datum.rating, review: @visitor_datum.review } }
    assert_redirected_to visitor_datum_url(@visitor_datum)
  end

  test "should destroy visitor_datum" do
    assert_difference('VisitorDatum.count', -1) do
      delete visitor_datum_url(@visitor_datum)
    end

    assert_redirected_to visitor_data_url
  end
end
