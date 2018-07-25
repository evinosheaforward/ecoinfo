require "application_system_test_case"

class VisitorDataTest < ApplicationSystemTestCase
  setup do
    @visitor_datum = visitor_data(:one)
  end

  test "visiting the index" do
    visit visitor_data_url
    assert_selector "h1", text: "Visitor Data"
  end

  test "creating a Visitor datum" do
    visit visitor_data_url
    click_on "New Visitor Datum"

    fill_in "Rating", with: @visitor_datum.rating
    fill_in "Review", with: @visitor_datum.review
    click_on "Create Visitor datum"

    assert_text "Visitor datum was successfully created"
    click_on "Back"
  end

  test "updating a Visitor datum" do
    visit visitor_data_url
    click_on "Edit", match: :first

    fill_in "Rating", with: @visitor_datum.rating
    fill_in "Review", with: @visitor_datum.review
    click_on "Update Visitor datum"

    assert_text "Visitor datum was successfully updated"
    click_on "Back"
  end

  test "destroying a Visitor datum" do
    visit visitor_data_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Visitor datum was successfully destroyed"
  end
end
