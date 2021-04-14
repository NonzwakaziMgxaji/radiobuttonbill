describe('The radio button bill factory function', function(){
    it('should be able to set the correct amount to the appropriate radio button', function(){
        let bill = radiobuttonbill();
        bill.radioBill("call");
        assert.equal(2.75, bill.callTotal());

        bill.radioBill("sms");
        assert.equal(0.75, bill.smsTotal());
    });

    it('should be able to add sms and call added and return total', function(){
        let bill = radiobuttonbill();
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("sms");
        bill.radioBill("sms");
        bill.radioBill("sms");
        assert.equal(13.25, bill.Total());
    });

    it("should return 'warning' if total cost exceed R30.00", function(){
        let bill = radiobuttonbill();
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("sms");
        bill.radioBill("sms");
        bill.radioBill("sms");
        
        assert.equal("warning", bill.colours());
        assert.equal(32.5, bill.Total());
    });

    it("should return 'danger' if total cost exceed R50.00", function(){
        let bill = radiobuttonbill();
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("sms");
        bill.radioBill("sms");
        bill.radioBill("sms");
        bill.radioBill("call");
        bill.radioBill("sms");
        bill.radioBill("sms");
        bill.radioBill("sms");
        bill.radioBill("sms");
        bill.radioBill("call");
        bill.radioBill("call");
        bill.radioBill("call");
        
        assert.equal("danger", bill.colours());
        assert.equal(52, bill.Total());
    });
});