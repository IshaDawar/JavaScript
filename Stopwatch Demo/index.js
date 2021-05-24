function Stopwatch()
{
        let startTime, endTime,running, duration = 0;
        this.Start = function()
        {
            if(running)
            throw new Error('Stopwatch is already running');
            
            running = true;
            startTime = new Date();
        }
        this.Stop = function()
        {
            if(!running)
            throw new Error('Stopwatch is already stopped');
            
            running = false;
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime())/1000;
             duration+= seconds
        }
        this.restart = function()
        {
            running = true;
            startTime = new Date();
        }

        Object.defineProperty(this,'duration',{
            get :function() {
                return duration;
            }
        });
}