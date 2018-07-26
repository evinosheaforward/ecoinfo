class VisitorDataController < ApplicationController
  before_action :set_visitor_datum, only: [:show, :edit, :update, :destroy]
  # GET /visitor_data
  # GET /visitor_data.json
  def index
    @visitor_data = VisitorDatum.all

    respond_to do |format|
    format.html  # index.html.erb
    format.json  { render :json => @visitor_data }
 end

  def edit
  end

  # GET /visitor_data/new
  def create
    @visitor_datum = VisitorDatum.new(visitor_datum_params)

    respond_to do |format|
      if @visitor_datum.save
        format.html { redirect_to @visitor_datum, notice: 'Visitor datum was successfully created.' }
        format.json { render :show, status: :created, location: @visitor_datum }
      else
        format.html { render :new }
        format.json { render json: @visitor_datum.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visitor_data/1
  # PATCH/PUT /visitor_data/1.json
  def update
    respond_to do |format|
      if @visitor_datum.update(visitor_datum_params)
        format.html { redirect_to @visitor_datum, notice: 'Visitor datum was successfully updated.' }
        format.json { render :show, status: :ok, location: @visitor_datum }
      else
        format.html { render :edit }
        format.json { render json: @visitor_datum.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /visitor_data/1
  # DELETE /visitor_data/1.json
  def destroy
    @visitor_datum.destroy
    respond_to do |format|
      format.html { redirect_to visitor_data_url, notice: 'Visitor datum was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visitor_datum
      @visitor_datum = VisitorDatum.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def visitor_datum_params
      params.require(:visitor_datum).permit(:rating, :review)
    end
end
end
