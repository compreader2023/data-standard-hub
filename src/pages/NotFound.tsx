import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">本页面暂未开发</h1>
        <Button onClick={handleGoBack} variant="outline" className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
