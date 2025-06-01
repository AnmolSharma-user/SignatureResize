
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Upload, Settings, Download } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Why Use This Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Why Use This Tool?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm">Fix oversized signatures</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm">Meet govt form requirements</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm">Professional email signatures</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm">No watermarks or signups</span>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
              1
            </div>
            <div>
              <Upload className="h-4 w-4 text-gray-500 mb-1" />
              <p className="text-sm font-medium">Upload image</p>
              <p className="text-xs text-gray-500">Drag & drop or click to browse</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
              2
            </div>
            <div>
              <Settings className="h-4 w-4 text-gray-500 mb-1" />
              <p className="text-sm font-medium">Adjust size/background</p>
              <p className="text-xs text-gray-500">Use presets or custom dimensions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
              3
            </div>
            <div>
              <Download className="h-4 w-4 text-gray-500 mb-1" />
              <p className="text-sm font-medium">Download perfect signature</p>
              <p className="text-xs text-gray-500">PNG, JPG, or SVG format</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ad Space */}
      <Card className="bg-gray-50 dark:bg-gray-800 border-dashed">
        <CardContent className="p-6 text-center">
          <div className="text-gray-400 text-sm">
            Advertisement Space<br />
            (300x250)
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
